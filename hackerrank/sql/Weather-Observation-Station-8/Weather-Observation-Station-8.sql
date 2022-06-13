select distinct city
from station
where city regexp '.*\[aieouAIEOU]$'
    and city regexp '^[aieouAIEOU].*';