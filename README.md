# Plant Network for the Moonshiners Coding Challenge

## Planned Approach

1. Create a repository with `create-react-app` using TypeScript.
2. Add a `docker-compose.yaml` file to start a container with WordPress.
3. Deploy `docker-compose` to the server.
4. Create a subdomain that points to WordPress.
5. Add custom post types and fields in `functions.php` in WordPress.
6. Build the UI.

## Actual Approach

1. Created the repository with `create-react-app` using the TypeScript template and named it "plant-network."
2. Copied the `docker-compose` configuration for WordPress from Docker Hub, adjusted it, and uploaded it to my live server.
3. Created a subdomain `plant-network-api.sebastiankoller.at` and pointed it to my server.
4. Added a reverse proxy with Caddy.
5. Started `docker-compose` and logged into WordPress.
6. Created a custom theme with `functions.php`, `style.css`, and `index.php` and mounted it in the container.
7. Published a sample post and tried to fetch it.
8. Installed the JWT Authentication for WP-API plugin.
9. Copied `wp-config.php` with `docker cp plant_wordpress:/var/www/html/wp-config.php ~/Documents/plantNetwork/wp-config.php` and mounted it in the container.
10. Added the JWT secret to `wp-config.php`.
11. Tried to fetch a token and create a post with Postman.
12. Added the Swagger plugin.
13. Tried to generate types with a Makefile, but the generated code didn't contain custom field types, so I removed it again.
14. Created types and service methods.
15. Created an AppBar.
16. Created Card Components.
17. Created Card Grid Component.
18. Created Filter Components.
19. Made the UI responsive.
20. Added an Admin Panel.
21. Finalized documentation.

## Explanation

- The idea for the dashboard is a management tool for a blog or a social network for plant enthusiasts. The dashboard displays posts that are either plant highlights or plant-themed events. An administrator can also create such posts.
- The WordPress backend is running on a Docker container and is online at [https://plant-network.sebastiankoller.at](https://plant-network.sebastiankoller.at).
- The React.js Dashboard fetches the posts and displays them in a grid. The posts are sortable by creation date and filterable by title and post type.
- The admin credentials are stored in an `.env` file, so if you clone this repository, you won't be able to test the admin functionalities.
- As an admin, you have access to the Admin Panel, which allows you to create plant highlights and events.
- The dashboard is not deployed to the server because I don't own the rights to the images in the sample data, and I didn't want to bother creating a legal notice page.
