import Header from "./Header"
import PropTypes from "prop-types"
import type { TableOfContentsEntry } from "notion-utils"
import MetaConfig, { MetaConfigProps } from "./MetaConfig"
import TableOfContent from "../TableOfContent"
import { useContext } from "react"
import PostContext from "@/src/hooks/usePost"

type Props = {
  children: React.ReactNode
  metaConfig: MetaConfigProps
  fullWidth?: boolean
  tableOfContent?: TableOfContentsEntry[]
}

const Layout: React.FC<Props> = ({
  children,
  metaConfig,
  fullWidth = false,
  tableOfContent,
}) => {
  return (
    <div>
      <MetaConfig {...metaConfig} />
      <div className={`wrapper`}>
        {metaConfig.type !== "Paper" && <Header fullWidth={fullWidth} />}
        <div className="post-main-container">
          <main
            className={`m-auto flex-grow w-full transition-all max-w-6xl px-4 ${
              fullWidth && "px-4 md:px-24"
            } ${metaConfig.type === "Paper" && "py-10"} `}
          >
            {children}
          </main>
          {metaConfig.type !== "Paper" &&
            tableOfContent &&
            tableOfContent?.length > 0 && (
              <aside className="md:flex md:ml-4 sticky md:flex-col md:items-center md:top-36 md:self-start md:flex-auto hidden post-table-of-content">
                <TableOfContent
                  className="mb-6"
                  tableOfContent={tableOfContent}
                  mobile
                />
              </aside>
            )}
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
