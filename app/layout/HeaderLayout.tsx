import Link from 'next/link'
import React from 'react'

function HeaderLayout() {
  return (
    <header className="pt-6 mb-4 flex items-center border-b-2 sticky top-0 bg-white z-50">
        <Link className="ml-6 mb-8 font-bold text-xl" href={"/"}>발랑</Link>
        <Link className="ml-10 mb-8" href={"/brands"}>BRANDS</Link>
        <Link className="ml-auto mb-8" href={"/sign-up"}>회원가입</Link>
        <Link className="ml-10 mb-8 mr-5" href={"/log-in"}>로그인</Link>
      </header>
  )
}

export default HeaderLayout