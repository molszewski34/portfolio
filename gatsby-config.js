
module.exports = {
  siteMetadata: {
    title: `Mariusz Olszewski Portfolio`,
    description: `This is Mariusz Olszewski Portfolio site`,
    author: `@MariuszOlszewski`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,

        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PORTFOLIO",

        fieldName: "portfolio",

        url: "https://api-eu-central-1.hygraph.com/v2/cl78oo3yp0yzt01uj3mm21l60/master",
      },
    },
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-eu-central-1.hygraph.com/v2/cl78oo3yp0yzt01uj3mm21l60/master",
        token:
          "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NjE3NTUwMzQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuaHlncmFwaC5jb20vdjIvY2w3OG9vM3lwMHl6dDAxdWozbW0yMWw2MC9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZDczNDZkY2EtNDE1Ny00ZTNjLWJiNDYtOGZhYmU0ODJhN2FlIiwianRpIjoiY2w3ZWUxaWc5NWk1czAxdW04NjdrNWI3MiJ9.zw6rTgxSuqUhdSgv5aB2ft-ILxH8PEUnJGlpinrX0fTVqzl7fGNCd-D9a3L2RrBTirc1VTlE3JhAsS1a-BzP7-Ou-m-XDKNsbTMUEcOjzjywxigiAjVVbFX9Rt3Xi1zkiYjgn0LgEIowdE-jxDAObx287ItyGH8YOm950sG9yy4ss9B4GC4sEhH1ShyTSY6gvF0OkPycs61wCD_qohjrUTLaB2S_csHuPGcEdbqyXW9c6gdrVBGHfFSbvBkGCLhON0ELv8dzX6G3W2q63pAu0l3anttyGcGAwk4eReQSSlH0Z-mM7THJ-v3Vmae6-KJ0i0ICWSbEuUw9GoxiVv4RJO0uTMD8z8zrq5rTBk2nT_QkG4F_ASb_v2BUN3SGKwl4yUTjSQHwm6aDazcr8R79aT-npaOv0gRaausqkAWKHH_s9zw1et9QTmWug6b1zd_As6jWM2p9Cuv423n69tcz4XFa9vy6tKbdOEkI4vHNpiCdRGVFdm56eWpMoCYJa_At0yuwSurN7vMTINx_b79aN4o8J1l-Ja6hwL63eebhuNk5HK_rtwzUgcJOjx876_anlxUZPW4vamne4p7P6Jv6XR0jaZJ0ueUkU5z4ybUPKzIOPDLU626QSbKZNR9bUIUNhLJQmGs3TCjrfhhIw1SR7Cy52sK7GZ5DfNysgMCGo1A",
      },
    },
  ],
}
