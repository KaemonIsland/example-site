import Link from 'next/link'

export default function Articles() {
  // Dummy data for demonstration
  const articles = [
    { id: '1', title: 'Understanding NextJS App Router' },
    { id: '2', title: 'Deep Linking in Modern Web Apps' },
    { id: '3', title: 'Web Scraping Best Practices' },
  ]

  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
