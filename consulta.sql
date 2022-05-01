SELECT 
    tu.id as id,
	tu.email
FROM ton_users tu 
INNER JOIN ton_transactions tt ON tt.user_id = tu.id 
WHERE 
    tt.status = 'PROCESSING'
GROUP BY 
    tu.id,
    tu.email