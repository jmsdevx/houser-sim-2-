UPDATE houser
SET datname = $2, dataddress = $3, datcity = $4, datstate = $5, datzip = $6,
house_image = $7, mortgageamt = $8, rent =$9
WHERE id = $1;
