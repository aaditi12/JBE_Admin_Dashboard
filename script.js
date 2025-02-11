document.addEventListener('DOMContentLoaded', () => {
  const taskData = [
    { id: 1, name: 'Gem Portal Completion', assignedTo: 'Shreyash Sharma', startDate: '2025-02-03', dueDate: '2025-02-05', priority: 'High', status: 'In Progress', notes: 'Yes' },
    { id: 2, name: 'Java OOPs Concepts', assignedTo: 'Shreyash Sharma', startDate: '2025-02-03', dueDate: '2025-02-03', priority: 'Medium', status: 'In Progress', notes: 'Yes' }
  ];

  const attendanceData = [
    { id: 'EMP001', name: 'Shreyash Sharma', date: '2025-02-11', status: 'Present' },
    { id: 'EMP002', name: 'Priyvrat', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP003', name: 'Mukund Auti', date: '2025-02-11', status: 'Present' },
    { id: 'EMP004', name: 'Abhay Pawar', date: '2025-02-11', status: 'Present' },
    { id: 'EMP005', name: 'Bhavesh', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP006', name: 'Shashikant', date: '2025-02-11', status: 'Present' },
    { id: 'EMP007', name: 'Rutika', date: '2025-02-11', status: 'Present' },
    { id: 'EMP008', name: 'Gayatri', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP009', name: 'Darshan', date: '2025-02-11', status: 'Present' },
    { id: 'EMP010', name: 'Aaditi Mishra', date: '2025-02-11', status: 'Present' },
    { id: 'EMP011', name: 'Simran Jamadar', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP012', name: 'Nikhil Jadhav', date: '2025-02-11', status: 'Present' },
    { id: 'EMP013', name: 'Neha Memane', date: '2025-02-11', status: 'Present' },
    { id: 'EMP014', name: 'Prathmesh Shelar', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP015', name: 'Rohit', date: '2025-02-11', status: 'Present' },
    { id: 'EMP016', name: 'Gaurav', date: '2025-02-11', status: 'Present' },
    { id: 'EMP017', name: 'Suraj Ganeshpure', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP018', name: 'Venkatesh Kulkarni', date: '2025-02-11', status: 'Present' },
    { id: 'EMP019', name: 'Avinash Sharma', date: '2025-02-11', status: 'Present' },
    { id: 'EMP020', name: 'Karthik', date: '2025-02-11', status: 'Present' },
    { id: 'EMP021', name: 'Priti', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP022', name: 'Mihir', date: '2025-02-11', status: 'Present' },
    { id: 'EMP023', name: 'Priyanka', date: '2025-02-11', status: 'Present' },
    { id: 'EMP024', name: 'Rushabh', date: '2025-02-11', status: 'Absent' },
    { id: 'EMP025', name: 'Adeetya', date: '2025-02-11', status: 'Present' },
    { id: 'EMP026', name: 'Saptarshi', date: '2025-02-11', status: 'Present' }
  ];

  const taskTableBody = document.getElementById('task-table-body');
  const attendanceTableBody = document.getElementById('attendance-table-body');

  taskData.forEach(task => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task.id}</td>
      <td>${task.name}</td>
      <td>${task.assignedTo}</td>
      <td>${task.startDate}</td>
      <td>${task.dueDate}</td>
      <td class="priority-${task.priority.toLowerCase()}">${task.priority}</td>
      <td>${task.status}</td>
      <td>${task.notes}</td>
    `;
    taskTableBody.appendChild(row);
  });

  attendanceData.forEach(record => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${record.id}</td>
      <td>${record.name}</td>
      <td>${record.date}</td>
      <td class="status-${record.status.toLowerCase()}">${record.status}</td>
    `;
    attendanceTableBody.appendChild(row);
  });

  document.getElementById('search-input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('tbody tr').forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
  });

  document.querySelectorAll('th').forEach(header => {
    header.addEventListener('click', () => {
      const tableBody = header.closest('table').querySelector('tbody');
      const rows = Array.from(tableBody.querySelectorAll('tr'));
      const column = header.getAttribute('data-column');
      const order = header.getAttribute('data-order');
      const newOrder = order === 'desc' ? 'asc' : 'desc';

      rows.sort((a, b) => {
        const aText = a.querySelector(`td:nth-child(${header.cellIndex + 1})`).textContent;
        const bText = b.querySelector(`td:nth-child(${header.cellIndex + 1})`).textContent;
        return newOrder === 'asc' ? aText.localeCompare(bText) : bText.localeCompare(aText);
      });

      header.setAttribute('data-order', newOrder);
      tableBody.innerHTML = '';
      rows.forEach(row => tableBody.appendChild(row));
    });
  });

  document.getElementById('new-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const assignedTo = document.getElementById('assigned-to').value;
    const startDate = document.getElementById('start-date').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${taskData.length + 1}</td>
      <td>${taskName}</td>
      <td>${assignedTo}</td>
      <td>${startDate}</td>
      <td>${dueDate}</td>
      <td class="priority-${priority.toLowerCase()}">${priority}</td>
      <td>Not Started</td>
      <td></td>
    `;
    taskTableBody.appendChild(newRow);

    taskData.push({
      id: taskData.length + 1,
      name: taskName,
      assignedTo: assignedTo,
      startDate: startDate,
      dueDate: dueDate,
      priority: priority,
      status: 'Not Started',
      notes: ''
    });

    document.getElementById('new-task-form').reset();
  });
});