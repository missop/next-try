import Head from "next/head"
import { FunctionComponent, ReactNode } from "react"
import Footer from "./components/footer"
import Nav from "./components/nav"
import styles from "./index.module.scss"

interface LayoutProps {
    children:ReactNode
}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <>
      <Head>
        <title>Next从0到1搭建高性能web应用</title>
        <meta name="keywords" content="服务端渲染,高性能,web应用,next" />
        <meta name="description" content="配置项目eslint规范以及项目格式化,tailwind + sass实现响应式页面布局,SEO：每个页面自定义TDK，没有设置的使用默认的TDK,为每个页面设置统一的菜单栏和底部版权" />
      </Head>
      <Nav/>
      <main className={styles.layout}>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout