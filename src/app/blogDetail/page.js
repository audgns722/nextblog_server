import Link from 'next/link'
import styles from "./page.module.scss";

export default function BlogDetail() {
    return (
        <div className={styles.detail__wrap}>
            <div className={styles.detail__header}>
                <h2>Detail</h2>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p>"A kind word can be a light in someone's day."</p>
            </div>
            <div className={styles.detail__inner}>
                <div className={styles.details}>
                    <h3>내 관심사를 내 스타일대로</h3>
                    <div className={styles.profile}>
                        <span className={styles.avatar}></span>
                        <span className={styles.auth}>이명훈</span>
                        <span className={styles.date}>24.01.18</span>
                    </div>
                    <div className={styles.detail__content}>
                        독특하고 멋진 블로그를 간단히 들어 보세요. 독특하고 멋진 블로그를 간단히 들어 보세요. 독특하고 멋진 블로그를 간단히 들어 보세요.
                        독특하고 멋진 블로그를 간단히 들어 보세요. 독특하고 멋진 블로그를 간단히 들어 보세요.
                        독특하고 멋진 블로그를 간단히 들어 보세요.독특하고 멋진 블로그를 간단히 들어 보세요.
                    </div>
                    <div className={styles.detail__bottom}>
                        <div className={styles.left}>
                            <span><i></i>View 2</span>
                            <span><em></em>Like 1</span>
                        </div>
                        <div className={styles.detail__btn}>
                            <Link href='/'>
                                수정
                            </Link>
                            <button>삭제</button>
                            <Link href='/blogList'>목록</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.detail__comments}>
                    <form>
                        <fieldset>
                            <input className={styles.comment} type='text' placeholder='댓글을 작성해주세요'></input>
                            <input className={styles.password} type='password' placeholder='비밀번호는 4자리 입니다.'></input>
                            <button>작성</button>
                        </fieldset>
                    </form>
                    <div className={styles.comment__list}>
                        <div className={styles.title}>블로그가 너무 이쁘네요</div>
                        <div className={styles.right}>
                            <div className={styles.profile}>
                                <div className={styles.profileimg}></div>
                                <div className={styles.auth}>익명</div>
                            </div>
                            <div className={styles.date}>24.01.18 작성됨</div>
                        </div>
                    </div>
                    <div className={styles.comment__list}>
                        <div className={styles.title}>블로그가 너무 이쁘네요 블로그가 너무 이쁘네요</div>
                        <div className={styles.right}>
                            <div className={styles.profile}>
                                <div className={styles.profileimg}></div>
                                <div className={styles.auth}>익명</div>
                            </div>
                            <div className={styles.date}>24.01.18 작성됨</div>
                        </div>
                    </div>
                    <div className={styles.comment__list}>
                        <div className={styles.title}>블로그가 너무 이쁘네요</div>
                        <div className={styles.right}>
                            <div className={styles.profile}>
                                <div className={styles.profileimg}></div>
                                <div className={styles.auth}>익명</div>
                            </div>
                            <div className={styles.date}>24.01.18 작성됨</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
