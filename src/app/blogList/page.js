import Link from "next/link";
import styles from "./page.module.scss";

export default function BlogList() {
    return (
        <div className={styles.list__wrap}>
            <div className={styles.list__header}>
                <h2>Wellcome</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>"Where every word tells a story."</p>
                <input type="text" placeholder="게시글을 검색해주세요" />
            </div>
            <div className={styles.list__bottom}>
                <div className={styles.container}>
                    <div className={styles.list__nav}>
                        <div className={styles.left}>
                            <span className={styles.active}>Blog</span>
                            <span>Notice</span>
                        </div>
                        <Link href="/blogWrite">글쓰기</Link>
                    </div>
                    <div className={styles.lists__wrap}>
                        <div className={styles.list}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/300x300/?programming" alt="unsplash" />
                            <span className={styles.cate}>교육</span>
                            <Link href='/blogDetail'><h3 className={styles.title}>내 관심사를 내 스타일대로</h3></Link>
                            <p className={styles.desc}>독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className={styles.listbot}>
                                <p className={styles.auth}>관리자</p>
                                <p className={styles.date}>2024-01-17</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/300x303/?programming" alt="unsplash" />
                            <span className={styles.cate}>교육</span>
                            <h3 className={styles.title}>내 관심사를 내 스타일대로</h3>
                            <p className={styles.desc}>독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className={styles.listbot}>
                                <p className={styles.auth}>관리자</p>
                                <p className={styles.date}>2024-01-17</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/302x300/?programming" alt="unsplash" />
                            <span className={styles.cate}>교육</span>
                            <h3 className={styles.title}>내 관심사를 내 스타일대로</h3>
                            <p className={styles.desc}>독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className={styles.listbot}>
                                <p className={styles.auth}>관리자</p>
                                <p className={styles.date}>2024-01-17</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/300x301/?programming" alt="unsplash" />
                            <span className={styles.cate}>교육</span>
                            <h3 className={styles.title}>내 관심사를 내 스타일대로</h3>
                            <p className={styles.desc}>독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className={styles.listbot}>
                                <p className={styles.auth}>관리자</p>
                                <p className={styles.date}>2024-01-17</p>
                            </div>
                        </div>
                        <div className={styles.list}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="https://source.unsplash.com/random/301x300/?programming" alt="unsplash" />
                            <span className={styles.cate}>교육</span>
                            <h3 className={styles.title}>내 관심사를 내 스타일대로</h3>
                            <p className={styles.desc}>독특하고 멋진 블로그를 간단히 들어 보세요.</p>
                            <div className={styles.listbot}>
                                <p className={styles.auth}>관리자</p>
                                <p className={styles.date}>2024-01-17</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
