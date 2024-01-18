import styles from "./page.module.scss";

export default function blogWrite() {
    return (
        <div className={styles.write__wrap}>
            <div className={styles.write__header}>
                <h2>Write</h2>
                <p>"Write your story, inspire the world."</p>
            </div>
            <div className={styles.write__bottom}>
                <form action="/api/post/write" method="POST" className={styles.write__form}>
                    <fieldset>
                        <select>
                            <option>Blog</option>
                            <option>Notice</option>
                        </select>
                        <legend className='blind'>글쓰기 영역</legend>
                        <label htmlFor="youName" className="required blind">글 제목</label>
                        <input type="text" name="title" id="youName" placeholder="글 제목을 작성하세요!" />
                        <label htmlFor="youConts" className="required blind">글 내용</label>
                        <textarea name="content" id="youConts" placeholder="글 내용을 작성하세요!" />
                        <button type="submit" >글쓰기</button>
                    </fieldset>
                </form>
            </div>
        </div >
    )
}