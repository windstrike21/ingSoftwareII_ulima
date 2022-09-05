const ChatArea = () => {
    return <div className="row">
        <div className="col-1 text-end">
            
        </div>
        <div className="col-11 pe-4">
            <p className="row py-2 w-75 bg-light rounded-2">msg</p>
            <p className="row py-2 w-75 bg-secondary rounded-2 ms-auto">msg</p>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>            
        </div>
        <div className="row pe-5">
                <div className="col-md-11 ps-4">
                    <textarea className="w-100"></textarea>
                </div>
                <div className="col-md-1">
                    <button type="button" className="btn btn-secondary opacity-50">ENVIAR</button>
                </div>
            </div>
    </div>
}
export default ChatArea;