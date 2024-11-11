# Plant network for the Moonshiners coding challenge

## Planned approach

1. Create repo with create-react-app with typescript
2. Add docker-compose.yaml that starts container with wordpress
3. Deploy docker-compose to server
4. Create sub domain that points to wordpress
5. Add custom post types and fields in wordpress functions.php
6. Build the UI

## Actual approach

1. Created repo with create-react-app with template typescript and name it "plant-network"
2. Copied the docker-compose for wordpress from docker hub, adjustet it and copied it to my live server
3. Created a sub domain plant-network-api.sebastiankoller.at and pointed it to my server
4. Added a reverse proxy with Caddy
5. Started docker-compose and logged into wordpress
6. Create custom theme with functions.php, style.css and index.php and mounted it in the container
7. Published a sample post and tried to fetch it
8. Installed the JWT Authentication for WP-API plugin
9. Copied the wp-config.php with docker cp plant_wordpress:/var/www/html/wp-config.php ~/Documents/plantNetwork/wp-config.php and mountet it in the container
10. Added the jwt secret to wp-config.php
11. Tried to fetch a token and create a post with postman
12. Added Swagger plugin
13. Tried to generate types with Makefile, but genereated code doesn't contain custom field types, so removed it again.
14. Created types and service methods.
15. Create Appbar
16. Create Card Components
17. Create Card Grid Component
18. Create Filter Components
19. Make UI responsive
20. Add Admin Panel
