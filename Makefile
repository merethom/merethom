.PHONY: all install

all:
	true

install:
	rm -rf "$(PREFIX)"/*
	cp -r * "$(PREFIX)"
