select distinct city
from station
where city regexp '.*\[aieouAIEOU]$';