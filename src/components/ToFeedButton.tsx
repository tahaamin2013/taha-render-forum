'use client'

import { ChevronLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { buttonVariants } from './ui/Button'
import Link from 'next/link'

const ToFeedButton = () => {
  const pathname = usePathname()
  const subredditPath = getSubredditPath(pathname)

  return (
    <Link href={subredditPath} className={buttonVariants({ variant: 'ghost' })}>
      <ChevronLeft className='h-4 w-4 mr-1' />
      {subredditPath === '/' ? 'Back home' : 'Back to community'}
    </Link>
  )
}

const getSubredditPath = (pathname: string) => {
  const splitPath = pathname.split('/')

  if (splitPath.length === 3) return '/'
  else if (splitPath.length > 3) return `/${splitPath[1]}/${splitPath[2]}`
  // default path, in case pathname does not match expected format
  else return '/'
}

export default ToFeedButton
