const Header =()=>{

    const today = new Date();

    return (
        <div>
            오늘은
            <h1>{today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일</h1>
        </div> 
    )
}
export default Header