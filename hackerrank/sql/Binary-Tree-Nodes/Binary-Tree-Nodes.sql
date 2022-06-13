select N,
    case
        when P is null then 'Root'
        when (
            select count(*)
            from BST
            where P = A.N
        ) > 0 then 'Inner'
        else 'Leaf'
    end
from BST A
order by N;