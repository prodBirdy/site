import { Route, Routes } from "react-router"
import { Home } from "@/pages/home"
import { PostPage } from "@/pages/post"

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/posts/:slug" element={<PostPage />} />
    </Routes>
  )
}

export default App
