<?php

$aliases['dev'] = array(
	'uri'=> 'dev.ccistudios.com',
	'root' => '/home/ccistud/subdomains/dev/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'ccistud',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'live.ccistudios.com',
	'root' => '/home/ccistud/subdomains/live/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'ccistud',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),
	'ssh-options'=>'-p 37241'
);
