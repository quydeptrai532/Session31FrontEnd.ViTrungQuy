const employees = [
    {
        id: 1,
        name: 'Example 1',
        age: 18,
        address:'District'
    },
    {
        id: 2,
        name: 'Example 2',
        age: 18,
        address:'District'
    },
    {
        id: 3,
        name: 'Example 3',
        age: 18,
        address:'District'
    },
    {
        id: 4,
        name: 'Example 4',
        age: 18,
        address:'District'
    },
    {
        id: 5,
        name: 'Example 5',
        age: 18,
        address:'District'
    },
    
]
let table=document.querySelector("#table tbody")
table.innerHTML=employees.map(employ =>`
    <tr>
        <td>
          ${employ.id}
        </td>
        <td>
        ${employ.name}
        </td>
        <td>
        ${employ.age}
        </td>
        <td>
        ${employ.address}
        </td>
    </tr>
`)