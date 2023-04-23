# CodeTally

CodeTally is a simple command line utility which counts the amount of lines of code in a directory.


### Installation 

CodeTally is available in both NPM and Yarn. 

```bash
npm install -g code-tally
```

### Usage

After installing the package, you can simply restart the shell and run the  `code-tally` command anywhere, and it will tally up the lines of code in that directory.

```bash
$ code-tally --dir [directory] --extensions [extensions] --exclude [paths] [--breakdown?]
```

- The `--dir` flag is used to determine in which folder the lines of code should be tallied. If not provided, it will run from the folder in which the command was ran from.
  - Example: `code-tally --dir ~/coding_project_101`
- The `--extensions` flag is used to determine which file extensions the command should look for. If not provided, every file will be checked for its lines of code. Separate each extension by a comma, and ensure no spaces are applied.
  - Example: `code-tally --extensions js,jsx,mjs,ts`
- The `--exclude` paths are paths which should not count towards the total lines of code. If not provided, every file will have its lines of code checked.
  - Example: `code-tally --exclude node_modules,lib`
- The `--breakdown` flag is an optional flag. When used, it will give a breakdown of the lines of code from each file.
  - Example: `code-tally --breakdown`
