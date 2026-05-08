import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { R as Root, T as Trigger, P as Portal, C as Content, b as Close, a as Title, D as Description, O as Overlay } from "../_libs/radix-ui__react-dialog.mjs";
import { B as Button, e as cn } from "./sellerProfiles-CxEQPkQ2.mjs";
import { R as Root2, L as List, T as Trigger$1, C as Content$1 } from "../_libs/radix-ui__react-tabs.mjs";
import { I as Input } from "./textarea-CmMe_hFg.mjs";
import { R as Root$1 } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { s as supabase } from "./router-TuDnUs-t.mjs";
import { L as LoaderCircle, X } from "../_libs/lucide-react.mjs";
const Dialog = Root;
const DialogTrigger = Trigger;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className), ...props });
DialogHeader.displayName = "DialogHeader";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Tabs = Root2;
const TabsList = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  List,
  {
    ref,
    className: cn(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = List.displayName;
const TabsTrigger = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Trigger$1,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = Trigger$1.displayName;
const TabsContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content$1,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = Content$1.displayName;
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root$1, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root$1.displayName;
function AuthModal({ children, defaultTab = "login", onSuccess, open, onOpenChange }) {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [firstName, setFirstName] = reactExports.useState("");
  const [lastName, setLastName] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const isControlled = open !== void 0 && onOpenChange !== void 0;
  const currentOpen = isControlled ? open : isOpen;
  const handleOpenChange = (newOpen) => {
    if (!newOpen) {
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
    }
    if (isControlled) {
      onOpenChange(newOpen);
    } else {
      setIsOpen(newOpen);
    }
  };
  const handleAuth = async (e, type) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (type === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              first_name: firstName,
              last_name: lastName
            }
          }
        });
        if (error) throw error;
        toast.success("Account created! Check your email to verify (if enabled) or you are now logged in.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        if (error) throw error;
        toast.success("Logged in successfully!");
      }
      handleOpenChange(false);
      onSuccess?.();
    } catch (error) {
      toast.error(error.message || "An error occurred during authentication.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Dialog, { open: currentOpen, onOpenChange: handleOpenChange, children: [
    children && /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTrigger, { asChild: true, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogTitle, { children: "Welcome to Artisans Market" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DialogDescription, { children: "Sign in to your account or create a new one to continue." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: defaultTab, className: "w-full mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "login", children: "Sign In" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "signup", children: "Sign Up" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "login", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => handleAuth(e, "login"), className: "space-y-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "login-email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "login-email",
                type: "email",
                placeholder: "hello@example.com",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "login-password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "login-password",
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full", disabled: loading, children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
            "Sign In"
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "signup", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => handleAuth(e, "signup"), className: "space-y-4 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "signup-firstname", children: "First name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "signup-firstname",
                  placeholder: "Jane",
                  value: firstName,
                  onChange: (e) => setFirstName(e.target.value),
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "signup-lastname", children: "Last name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Input,
                {
                  id: "signup-lastname",
                  placeholder: "Doe",
                  value: lastName,
                  onChange: (e) => setLastName(e.target.value),
                  required: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "signup-email", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "signup-email",
                type: "email",
                placeholder: "hello@example.com",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "signup-password", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                id: "signup-password",
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                required: true,
                minLength: 6
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "submit", className: "w-full", disabled: loading, children: [
            loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }) : null,
            "Create Account"
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
export {
  AuthModal as A,
  Label as L
};
