{
    "_id" : ObjectId("6327dede32b1253e6fbaef8e"),
    "name" : "HTML Basics",
    "price" : 20000,
    "isActive" : false,
    "instructor" : "Sir Alvin"
}


{
    "_id" : ObjectId("6327de4532b1253e6fbaef8b"),
    "name" : "CSS 101 + Flexbox",
    "price" : 21000,
    "isActive" : true,
    "instructor" : "Sir Alvin"
}

{
    "_id" : ObjectId("6327df1e32b1253e6fbaef92"),
    "name" : "Javascript 101",
    "price" : 32000,
    "isActive" : true,
    "instructor" : "Ma'am Tine"
}

{
    "_id" : ObjectId("6327df1e32b1253e6fbaef92"),
    "name" : "Git 101, IDE and CLI",
    "price" : 19000,
    "isActive" : false,
    "instructor" : "Ma'am Tine"
}

{
    "_id" : ObjectId("6327df4932b1253e6fbaef94"),
    "name" : "React.Js 101",
    "price" : 25000,
    "isActive" : true,
    "instructor" : "Ma'am Miah"
}


//db.courses.find({$and:[{"instructor":{$eq:"Sir Alvin"}},{"price":{$gte: 20000}}]})

//db.courses.find({$and:[{"instructor":{$eq:"Ma'am Tine"}},{"isActive":{$eq: false}}]})

//db.courses.find({$and:[{"name":{$eq: 'R' }},{"price":{$lte: 25000}}]})