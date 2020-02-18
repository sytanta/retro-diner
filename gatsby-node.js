const fs = require("fs")
const path = require("path")
const puppeteer = require("puppeteer")

const AllMenusQuery = `
{
  allMarkdownRemark(
    filter: { fileAbsolutePath: { regex: "/content/menu/" } }
    sort: { fields: [frontmatter___order], order: ASC }
  ) {
    edges {
      node {
        frontmatter {
          slug
        }
      }
    }
  }
}
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fileAbsolutePath
            frontmatter {
              id
              name
              slug
              categories
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // Menu items
    if (node.fileAbsolutePath.includes(`content/menu/`)) {
      createPage({
        path: `/menu/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/menu.js`),
        context: {
          id: node.id,
          menuFileLink: `/download/${node.frontmatter.slug}.pdf`,
        },
      })
      console.log('111111111111111111111111111111111111111111', node.fileAbsolutePath)
    }

    // Blog posts
    if (node.fileAbsolutePath.includes(`content/blog/`)) {
      createPage({
        path: `/blog/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          id: node.id,
        },
      })
    }

    // Categories
    if (node.fileAbsolutePath.includes(`content/category/`)) {
      const nameLowerCase = node.frontmatter.id.toLowerCase()

      createPage({
        path: `/category/${nameLowerCase}`,
        component: path.resolve(`./src/templates/category.js`),
        context: {
          categoryRegex: `/${node.frontmatter.id}/`,
        },
      })
    }

    // Authors
    if (node.fileAbsolutePath.includes(`content/author/`)) {
      createPage({
        path: `/author/${node.frontmatter.id}`,
        component: path.resolve(`./src/templates/author.js`),
        context: {
          authorName: node.frontmatter.name,
        },
      })
    }
  })

  const allMenus = await graphql(AllMenusQuery)
  const newestMenuNode = allMenus.data.allMarkdownRemark.edges[0].node

  // "/menu" path should always show the most recent menu
  const menuRoutes = ["/menu/", "/menu"]
  menuRoutes.map(slug => {
    createRedirect({
      fromPath: slug,
      redirectInBrowser: true,
      toPath: `/menu/${newestMenuNode.frontmatter.slug}`,
    })
  })
}

/**
 * Generate menu pdf files
 */
exports.onPostBuild = async ({ graphql }, pluginOptions) => {
  const allMenus = await graphql(AllMenusQuery)
  const menuSlugs = allMenus.data.allMarkdownRemark.edges.map(({ node }) => {
    return node.frontmatter.slug
  })

  const promises = menuSlugs.map(slug => printPDF(slug))
  await Promise.all(promises)
}

async function printPDF(pageName) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  const htmlPath = path.join(__dirname, "public", "menu", pageName, "index.html")

  const contentHtml = fs.readFileSync(htmlPath, "utf8")
  await page.setContent(contentHtml, { waitUntil: "networkidle2" })

  // Hide header, footer, and download button
  await page.addStyleTag({
    content: `header, footer { display: none }`,
  })

  await page.pdf({
    format: "A4",
    margin: { top: "1cm", bottom: "1cm", left: "0.5cm", right: "0.5cm" },
    path: path.join(__dirname, "public", "download", `${pageName}.pdf`),
  })

  await browser.close()
  return
}
