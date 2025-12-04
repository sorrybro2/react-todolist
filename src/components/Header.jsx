import './Header.css'
const Header =()=>{

    const today = new Date();

    return (
        <div className="header">
            <h3>오늘은</h3>
            <h1>{today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일</h1>
        </div> 
    )
}
export default Header