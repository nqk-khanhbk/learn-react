
function Login(){
    const isLogin = true;
    return (
        <>
        {isLogin ? (
            <>
                 <div>Thong tin nguoi dung,nut logout</div>
             </>
    ):(
            <>
                <div>Nut dang nhap,dang xuat</div>
            </>
    )}
     {isLogin && <div>Avatar</div>}
        </>
    )
}
export default Login;