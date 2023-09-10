export const Contact = () => {
    return (
        <div>
            <div className="contact .container" style={{height: 'calc(100vh - 50px)'}}>
                <div className='containerFromCOmp'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">name</label>
                            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="password" required />
                        </div>
                        <button type="submit" className="btnSent">send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
