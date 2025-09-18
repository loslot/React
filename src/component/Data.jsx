


// array

// export default function Data (){
//     const user = ['Nika', 'Dara', 'Bopha', 'Nita']
//     return(
//         <>
//             {user.map((item, index)=>(
//                 <h1 className="text-3xl font-medium">
//                     user{index +1 }: {item}
//                 </h1>
//             ))}
//         </>
//     )
// }


//array object

export default function Data (){
   const users = [
  {
    name: 'Kaka',
    gender: 'Male',
    age: '19',
    province: 'Siem Reap',
    school: 'AIS',
    email: 'nanaK@192@gmail.com',
  },
  {
    name: 'Lina',
    gender: 'Female',
    age: '18',
    province: 'Phnom Penh',
    school: 'ZIS',
    email: 'lina.sweet18@gmail.com',
  },
  {
    name: 'Rith',
    gender: 'Male',
    age: '20',
    province: 'Battambang',
    school: 'NISC',
    email: 'rith.cool20@yahoo.com',
  },
  {
    name: 'Sophea',
    gender: 'Female',
    age: '21',
    province: 'Kampot',
    school: 'LOGOS',
    email: 'sophea.21@outlook.com',
  },
  {
    name: 'Vannak',
    gender: 'Male',
    age: '22',
    province: 'Takeo',
    school: 'CIA First',
    email: 'vannak.dev22@gmail.com',
  }
];

    return (
        <>
            <div className="w-full">
                <table className="w-full">

                    <tr className="text-start bg-gray-500">
                        <th>NAME</th>
                        <th>GENDER</th>
                        <th>AGE</th>
                        <th>PROVINCE</th>
                        <th>SCHOOL</th>
                        <th>EMAIL</th>
                    </tr>
                    {users.map((item)=>(
                        <tr className=" border-2 border-black text-center bg-green-200">
                        <td>{item.name}</td>
                        <td>{item.gender}</td>
                        <td>{item.age}</td>
                        <td>{item.province}</td>
                        <td>{item.school}</td>
                        <td>{item.email}</td>
                    </tr>
                    ))}
                    
                    
                </table>
            </div>
        </>
    )
}

