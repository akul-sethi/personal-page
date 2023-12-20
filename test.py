from pexpect.replwrap import REPLWrapper

proc = REPLWrapper("sethi-script/sethi", ">", None)
print(proc.run_command("print 5; print 7; var x = 10; print x;"))
print(proc.run_command("struct A(){} print A();"))
