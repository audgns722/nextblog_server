import Link from "next/link";
import styles from "./page.module.scss";

export default function Login() {
    return (
        <div className={styles.login__wrap}>
            <div className={styles.login__header}>
                <h2>login</h2>
                <p>"Join our community, where every moment matters."</p>
            </div>
            <form className={styles.login__form}>
                <fieldset>
                    <legend className="blind">로그인 영역</legend>
                    <div>
                        <label htmlFor="youEmail" className="required blind">이메일</label>
                        <input
                            type="email"
                            id="youEmail"
                            name="youEmail"
                            placeholder="이메일"
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="youPass" className="required blind">비밀번호</label>
                        <input
                            type="password"
                            id="youPass"
                            name="youPass"
                            placeholder="비밀번호"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div>
                    </div>
                    <button type="submit">로그인</button>
                    <Link href='/join'><span className={styles.joinbtn}>회원가입</span></Link>
                    <span className={styles.google}><span></span>GOOGLE</span>
                    <span className={styles.facebook}><span></span>FACEBOOK</span>
                    <span className={styles.github}><span></span>GITHUB</span>
                </fieldset>
            </form>
        </div>
    )
}