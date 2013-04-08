/**
 * Copyright (C) 2013 Alexander Cumming
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */
/**
 * Really simple function to add the string [[domain.com]] or
 * [[whatever.domain.com]] to the end of all HTML <title> elements.
 */
(function() {
    if (window && document && document.title && window.location) {
        var hostname = window.location.hostname.replace(/^www./i, "");
        if (hostname) {
            document.title += " [[" + String(hostname) + "]]";
        };
    };
})();
