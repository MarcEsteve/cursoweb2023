<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u175161195_web2023' );

/** Database username */
define( 'DB_USER', 'u175161195_marc2023' );

/** Database password */
define( 'DB_PASSWORD', 'Marcweb2023' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'TVh<akoi]f|Xb.go`o2gMUFW47O%4l4r}P[5:06F/VS>eAZ>O=ekwa:=-&_q.pPU' );
define( 'SECURE_AUTH_KEY',  'fja7KER+8Vt~f(tQY]|am7[u<o=7JY5?NuG:~p@c[d5#h=U$}$xDz.E++L;mms0F' );
define( 'LOGGED_IN_KEY',    'pEO7~y_Wchk:=3p2w|X)sJ#5|zxwP}3=Z#ELQ/$_gh s3@xRVEO-*a9z%Tm6lNOY' );
define( 'NONCE_KEY',        '*Dw{02E[r*R!E!;>f.$) tF1@vwX7[a;.NeF4&$::oEFDlHjkYBc(0n;AfplKK.)' );
define( 'AUTH_SALT',        'b&]i6]=06`GO+#%MJXDU[T)p3lE_p$J+0%Gd%K;)g&?(*)/+Z}$-6 F:AW?~99o<' );
define( 'SECURE_AUTH_SALT', 'z>iM*K>&:5)$8.$%td=P5,5bKj.!QG$yn1cW~{H&M9t8zP*x5nw3o<S2nOmMG66u' );
define( 'LOGGED_IN_SALT',   'YmD~^I%kI]Fm=:MfmyStMJ=&,a30:?r&fwmUi40QSpXILt^$g+dq4x[fJ+Y[DRe8' );
define( 'NONCE_SALT',       '}]S!%KG@<%%lhZwKO`>GnVP$=DdBlSinCD_9*uO33ZFjCh#8+SpQqEQ]U13~ZUT:' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
