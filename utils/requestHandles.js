const getPostData = (req)=>{
    return new Promise((res, err)=>{
        try{
            let body = '';
            req.on('data', chunk => {body += chunk.toString()})

            req.on('end', () => {
                res(JSON.parse(body));
            });

        }catch(error){
            err(error)
        }
    })
}