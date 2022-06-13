select distinct city
from station
where city not regexp '.*\[aieouAIEOU]$'
    and city not regexp '^[aieouAIEOU].*';