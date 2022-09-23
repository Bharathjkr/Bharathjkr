db.getCollection('teachers').aggregate([{

    $unwind: "$name"
    
}]).pretty()