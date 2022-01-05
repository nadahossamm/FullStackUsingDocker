FROM nginx:1.15.8-alpine
#configuration
COPY ./nginx.conf /etc/nginx/nginx.conf

COPY ./*.html /usr/share/nginx/html/
copy ./*.css /usr/share/nginx/html/
copy ./*.png /usr/share/nginx/html/
COPY ./*.js /usr/share/nginx/html/