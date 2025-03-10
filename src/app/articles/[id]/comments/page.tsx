'use client'
import { useParams } from 'next/navigation'

export default function Comments() {
  const params = useParams()
  const { id } = params

  return (
    <>
      <h1>Comments for Article {id}</h1>
    </>
  )
}
