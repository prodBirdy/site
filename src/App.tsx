import { Route, Routes } from "react-router"
import { Home } from "@/pages/home"
import { PostPage } from "@/pages/post"
import { WidgetPage } from "@/pages/widget"
import { WidgetsPage } from "@/pages/widgets"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:slug" element={<PostPage />} />
      <Route path="/widgets" element={<WidgetsPage />} />
      <Route path="/widgets/:slug" element={<WidgetPage />} />
    </Routes>
  )
}

export default App
