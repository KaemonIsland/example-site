'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ArticleDetail() {
  const params = useParams()
  const { id } = params

  return (
    <>
      <h1>Detailed View</h1>
      <p>This is the detailed view for article ID: {id}</p>
      <Link href={`/articles/${id}/comments`}>View Comments</Link>
    </>
  )
}
