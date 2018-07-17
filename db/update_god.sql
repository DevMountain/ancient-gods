update gods
set name = $2, mythology = $3, demigod = $4
where id = $1
returning *;