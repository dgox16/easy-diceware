FROM composer:2.8 AS vendor

WORKDIR /app
COPY composer.json composer.lock ./
RUN composer install --no-interaction --no-dev --optimize-autoloader --no-scripts


FROM php:8.4-fpm-alpine

WORKDIR /var/www
COPY --from=vendor /app/vendor ./vendor
COPY . .
RUN apk add --no-cache postgresql-dev
RUN docker-php-ext-install pdo pdo_pgsql
RUN mkdir -p /var/www/storage /var/www/bootstrap/cache \
    && chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
EXPOSE 9000
