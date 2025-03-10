export default function ArticlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <h2>Articles</h2>
      <div>{children}</div>
    </section>
  )
}
