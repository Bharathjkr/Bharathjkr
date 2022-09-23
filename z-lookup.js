let join = (req) => {
    return new Promise(async (resolve, reject) => {
        try {
                    
            let classroom = await ClassModel.aggregate({
                $lookup:{
                    from:"students",
                    localField:"rollno",
                    foreignField:"empid",
                    as:"anything"

                }
                   
                    })       
                .catch(e => reject({message: e.message}))

            resolve({
                classroom,
                mesage: "Success"
            })  
        } catch (e) {
            reject({
                mesage: e.message
            })
        }
    })
}



// mongo query 


db.getCollection('students').aggregate([{
                $lookup:{
                    from:"teachers",
                    localField:"empid",
                    foreignField:"empid",
                    as:"assign"

                },
                $unwind: "$name"
                    }])
                    
                    
db.getCollection('post').aggregate([
    { $lookup:
        {
           from: "comments",
           localField: "title",
           foreignField: "postTitle",
           as: "comments"
        }
    }
])
