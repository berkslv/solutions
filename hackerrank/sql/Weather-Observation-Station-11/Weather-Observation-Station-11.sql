select distinct city
from station
where city not regexp '.*\[aieouAIEOU]$'
    or city not regexp '^[aieouAIEOU].*';