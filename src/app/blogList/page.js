import Link from "next/link";

export default function BlogList() {
    return (
        <div className="list__wrap">
            <div className='list__header'>
                <h2>Wellcome</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>"Where every word tells a story."</p>
                <input type="text"/>
            </div>
            <div className='list__bottom'>
                <div className='container'>
                    <div className='list__nav'>
                        <select>
                            <option>Blog</option>
                            <option>Notice</option>
                        </select>
                        <Link href='/blogWrite'>글쓰기</Link>
                    </div>
                    <div className='lists__wrap'>
                        <div className="list">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/300x300/?programming" alt="unsplash"/>
                            <span className="cate">교육</span>
                            <h3 className="title">내 관심사를 내 스타일대로</h3>
                            <p className="desc">독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className='listbot'>
                                <p className="auth">관리자</p>
                                <p className="date">2024-01-17</p>
                            </div>
                        </div>
                        <div className="list">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/300x303/?programming" alt="unsplash"/>
                            <span className="cate">교육</span>
                            <h3 className="title">내 관심사를 내 스타일대로</h3>
                            <p className="desc">독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className='listbot'>
                                <p className="auth">관리자</p>
                                <p className="date">2024-01-17</p>
                            </div>
                        </div>
                        <div className="list">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/302x300/?programming" alt="unsplash"/>
                            <span className="cate">교육</span>
                            <h3 className="title">내 관심사를 내 스타일대로</h3>
                            <p className="desc">독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className='listbot'>
                                <p className="auth">관리자</p>
                                <p className="date">2024-01-17</p>
                            </div>
                        </div>
                        <div className="list">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/300x301/?programming" alt="unsplash"/>
                            <span className="cate">교육</span>
                            <h3 className="title">내 관심사를 내 스타일대로</h3>
                            <p className="desc">독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className='listbot'>
                                <p className="auth">관리자</p>
                                <p className="date">2024-01-17</p>
                            </div>
                        </div>
                        <div className="list">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/301x300/?programming" alt="unsplash"/>
                            <span className="cate">교육</span>
                            <h3 className="title">내 관심사를 내 스타일대로</h3>
                            <p className="desc">독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className='listbot'>
                                <p className="auth">관리자</p>
                                <p className="date">2024-01-17</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
