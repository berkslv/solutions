select concat(employees.employees.first_name, ' ', employees.employees.last_name) name,
    employees.departments.dept_name department
from employees.employees
    left outer join employees.dept_emp on employees.employees.emp_no = employees.dept_emp.emp_no
    left outer join employees.departments on employees.departments.dept_no = employees.dept_emp.dept_no
limit 20