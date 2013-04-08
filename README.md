# Time Sink Title formatter

This plugin is a workaround for the [Time Sink](http://manytricks.com/timesink/) application that does nothing except inserting `[[domain.com]]` (with www. stripped, but other subdomains not stripped) at the end of all webpage titles.

This allows you to track websites (such as reddit) that don't put the name of the site in the `<title>` element, by tracking Chrome windows with a pattern like `*[[reddit.com]]`.

To use with Google Chrome, unpack the extension and, in the Chrome extension settings, choose "Load unpacked extension...", and select the extension.
