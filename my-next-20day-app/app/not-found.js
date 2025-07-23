'use client'
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold mb-4">404 - 페이지를 찾을 수 없습니다</h1>
            <p className="mb-6 text-gray-600">존재하지 않는 페이지입니다. 경로를 다시 확인해주세요</p>
            <button
            onClick={()=> router.push('/')}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                홈으로
            </button>
        </div>
    )
}