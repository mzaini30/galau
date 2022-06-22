import {defineConfig} from "vitepress"

export default defineConfig({
  title: "Anti Galau",
  lang: "id",
  base: "/assets/docs/.vitepress/dist/",
  lastUpdated: true,
  themeConfig: {
    editLink: {
      pattern:
        "https://github.com/mzaini30/galau/tree/master/app/src/main/assets/docs/:path",
      text: "Edit halaman ini",
    },
    nav: [
    	{text: "Review aplikasi", link: "https://play.google.com/store/apps/details?id=com.mzaini30.galau"}
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/mzaini30/galau" },
    ],
    sidebar: [
      {
        items: [
        	{text: "Permulaan", link: "/index.html"},
          { text: "Penyebab Galau", link: "/penyebab.html" },
          { text: "Padahal Udah Kerja", link: "/udah-kerja.html" },
        ],
      },
    ],
  },
})
